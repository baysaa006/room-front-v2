"use client";
import React, { useState } from "react";
import { MdFileUpload } from "react-icons/md";
import Card from "components/card";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import {
  CREATE_PREDICTION,
  UPDATE_PREDICTION,
} from "lib/graphql/mutation/upload";
import { GET_USER } from "lib/graphql/query/user";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [imageType, setImageType] = useState("");
  const [imageStyle, setImageStyle] = useState("");
  const router = useRouter();

  const client = useApolloClient();

  const { data, loading: fetching } = useQuery(GET_USER);

  const token = data && data?.getUser?.token;

  const [updatePrediction, { loading: uploading }] = useMutation(
    UPDATE_PREDICTION,
    {
      onError(err) {
        console.log(err);
      },
      onCompleted(data) {
        toast("Таны зураг амжилттай илгээгдлээ. Тун удахгүй бэлэн болно.");
        const user = client.cache.readQuery<{ getUser: any }>({
          query: GET_USER,
        });
        if (user && user.getUser) {
          client.cache.writeQuery({
            query: GET_USER,
            data: {
              ...user,
              getUser: { ...user.getUser, token: user.getUser.token - 1 },
            },
          });
        }
        setTimeout(() => {
          router.push("/admin/upload");
        }, 2000);
      },
    }
  );

  const [upload, { loading }] = useMutation(CREATE_PREDICTION, {
    onError(err) {
      console.log(err);
    },
    onCompleted(data) {
      uploadToS3(data.createPrediction.before, selectedFile).then(() => {
        updatePrediction({
          variables: {
            input: {
              id: data.createPrediction.id,
              theme: imageStyle,
              room: imageType,
            },
          },
        });
      });
    },
  });

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];

    if (token <= 0) {
      return toast(
        "Уучлаарай таны эрх хүрэлцэхгүй байна. Та эрхээ шинчилэнэ үү."
      );
    }

    if (token > 0 && file) {
      setSelectedFile(file);
    }
  };

  const handleImageTypeChange = (e: any) => {
    setImageType(e.target.value);
  };

  const handleImageStyleChange = (e: any) => {
    setImageStyle(e.target.value);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      return toast("Зураг аа оруулана уу !");
    }

    if (imageStyle === "") {
      return toast("Төрөл өө сонгоно уу!");
    }

    if (selectedFile) {
      upload({ variables: { type: selectedFile?.type.split("/")[1] } });
    } else {
      console.log("No file selected");
    }
  };

  async function uploadToS3(presignedUrl: string, fileObject: any) {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": fileObject.type,
      },
      body: fileObject,
    };

    return fetch(presignedUrl, requestOptions);
  }

  if (fetching || uploading) return;

  return (
    <div className="mt-14 flex w-full  justify-center  align-middle md:mt-20">
      <Card className="  flex  h-max w-full  flex-col  justify-center gap-6  rounded-[20px] bg-clip-border p-3 align-middle font-dm shadow-3xl shadow-shadow-500 dark:shadow-none  md:w-6/12 ">
        <div className=" flex  flex-col  justify-center gap-3 ">
          <h3 className=" text-xl font-bold leading-9 text-navy-700 dark:text-white">
            1. Өөрчлөлт хийх өрөөний зураг оруулана уу
          </h3>
          <div className="flex flex-col  justify-center overflow-hidden rounded-xl  p-4 bg-slate-800">
            <label
              htmlFor="fileInput"
              className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-xl   py-3 bg-navy-800"
            >
              {selectedFile ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected File"
                  className=" h-40 w-60  object-cover"
                />
              ) : (
                <MdFileUpload className="text-[80px]" />
              )}
              <h4 className="pb-4 text-xl font-bold  lg:pb-0">
                {selectedFile
                  ? "Дараах зураг сонгогдсон байна"
                  : "Зураг оруулах"}
              </h4>
              <input
                disabled={!token || token <= 0}
                type="file"
                id="fileInput"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
        <div className="flex  flex-col  justify-center gap-2  ">
          <h3 className=" text-xl font-bold leading-9 text-navy-700 text-white">
            2. Өөрчлөлт хийх өрөөний төрөлийг сонгоно уу
          </h3>
          <div className="flex flex-col  justify-center overflow-hidden rounded-xl  p-4 bg-slate-800">
            <select
              value={imageType}
              onChange={handleImageTypeChange}
              className="p-2 bg-slate-800 border-none  hover:border-slate-700/60"
            >
              <option value="bedroom">Унтлагын өрөө</option>
              <option value="living_room">Том өрөө</option>
              <option value="kitchen">Гал тогоо</option>
              <option value="bathroom">Угаалгын өрөө</option>
              <option value="walk-in-closet">Хувцасны өрөө</option>
              <option value="lobby">Коридор</option>
              <option value="office-room">Оффис</option>
            </select>
          </div>
        </div>
        <div className="flex  flex-col  justify-center gap-2  ">
          <h3 className=" text-xl font-bold leading-9 text-navy-700 dark:text-white">
            3. Өрөөний стайлыг сонгоно уу
          </h3>
          <div className="flex flex-col  justify-center overflow-hidden rounded-xl  p-4 bg-slate-800">
            <select
              value={imageStyle}
              onChange={handleImageStyleChange}
              className="p-2 bg-slate-800 border-none  hover:border-slate-700/60"
            >
              <option value="modern">Орчин үеийн</option>
              <option value="traditional">Уламжлалт</option>
              <option value="scandinavian">Скандинавын</option>
              <option value="minimalist">Минималист</option>
            </select>
          </div>
        </div>
        {token && (
          <h3 className=" text-xl font-bold  text-navy-700 dark:text-white">
            {token > 0
              ? `Таньд ${token} удаа өөрлөлт хийх эрх байна`
              : "Таньд эрх байхгүй байна."}
          </h3>
        )}

        <div className="flex  flex-col justify-center  gap-2">
          <div className="inline-flex items-center justify-center py-3 rounded-full border border-transparent [background:linear-gradient(theme(colors.slate.800),_theme(colors.slate.800))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] mb-3">
            <button disabled={!token || token >= 0} onClick={handleUpload}>
              Өөрчлөлт хийх
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Upload;
