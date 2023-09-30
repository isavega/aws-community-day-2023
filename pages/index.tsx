import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import Image from "next/image";
import { URL_API } from "@/helpers/api";
import { fetcher } from "@/helpers/fetcher";
import Container from "@/components/Container";
import Text from "@/components/Text";
import Button from "@/components/Button";

function Home() {
  const [showImage, setShowImage] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");

  const onClickHandler = async () => {
    // Se realiza una nueva solicitud a la API y actualiza la data
    const newData = await fetcher(URL_API);
    mutate(URL_API, newData);
    setShowImage(true);
    const urlImage: string = newData?.message || "";
    setImage(urlImage);
  };

  return (
    <Container>
      <Text>AWS Community Day 2023</Text>
      <Text>Dog API 🐕</Text>
      <Button onClick={onClickHandler}>Ver perrito</Button>
      {showImage && <Image src={image} width={500} height={500} alt="Dog" />}
    </Container>
  );
}

export default Home;
