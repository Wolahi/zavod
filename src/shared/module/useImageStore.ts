import { useState } from "react";
import { RcFile } from "antd/es/upload";
import { AxiosResponse } from "axios";
import { v4 as uuid } from "uuid";

import { $api } from "@/shared/api/apiInstance.ts";
import { IStorageImageInput } from "@/shared/config/interfaces/IStorageImageInput.ts";
import { IStorageOutput } from "@/shared/config/interfaces/IStorageOutput.ts";

const useImageStorage = () => {
  const [image, setImage] = useState<IStorageImageInput | null>(null);
  const [loading, setLoading] = useState(false);

  const setImageInStorage = async (file: RcFile) => {
    setLoading(true);
    const uuidGen = uuid();
    try {
      const res: AxiosResponse<IStorageOutput> = await $api.post(
        "/api/storage",
        { file },
        {
          headers: {
            "content-type": "multipart/form-data",
          },
          params: {
            uuid: uuidGen,
          },
        },
      );
      setImage({ ...res.data, parentId: uuidGen });
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  const deleteImage = async () => {
    if (image) {
      await $api.delete("/api/storage", {
        params: {
          uuid: image.uuid,
        },
      });
      setImage(null);
    }
  };

  return { image, setImageInStorage, deleteImage, loading, setImage };
};

export default useImageStorage;
