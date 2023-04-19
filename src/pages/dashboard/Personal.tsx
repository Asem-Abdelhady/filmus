// import useSWR from "swr";
// import Layout from "@/components/layout";
// import { ReactElement, useEffect, useState } from "react";
// import { useSession } from "next-auth/react";

import axios from "axios";
import { useState, useEffect } from "react";
import { Text, VStack } from "@chakra-ui/react";
import IApiResponse from "../../interfaces/ApiResponse";
import React from "react";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import CardsList from "../../components/Dashboard/Trending/CardsList";
import { BASE_URL } from "../../config/config";

// import axios from "axios";
// import { decode } from "next-auth/jwt";

// export default function Personal() {
//   // const { data: session } = useSession();
//   // const userData: ILoginResponse = session?.user as ILoginResponse;
//   // const [movieData, setData] = useState(null);
//   // const [isLoading, setLoading] = useState(false);

//   // console.log("userData: ", userData);

//   // useEffect(() => {
//   //   setLoading(true);
//   //   if (userData) {
//   //     fetch(`/api/${userData._id}/loved/3/movie`, {
//   //       method: "GET",
//   //       headers: {
//   //         authorization: "Bearer " + userData.token,
//   //       },
//   //     })
//   //       .then((res) => res.json())
//   //       .then((movieData) => {
//   //         setData(movieData);
//   //         setLoading(false);
//   //       });
//   //   }
//   // }, []);

//   return <div>personal</div>;
// }
// Personal.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };

// export async function getServerSideProps(context: {
//   req: { cookies: { [x: string]: any } };
// }) {
//   console.log("Token: ", context.req.cookies["next-auth.session-token"]);

//   return {
//     props: { message: `Next.js is awesome` },
//   };
// }

export default function Personal() {
  const [loved, setLoved] = useState<IApiResponse[]>([]);
  const [watched, setWatched] = useState<IApiResponse[]>([]);
  const [toWatch, setToWatch] = useState<IApiResponse[]>([]);
  const [isLoading, setLoading] = useState(false);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get<IApiResponse[]>(`${BASE_URL}/users/${userId}/loved`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setLoved(res.data))
      .catch((err) => console.log("Error: ", err));

    axios
      .get<IApiResponse[]>(`${BASE_URL}/users/${userId}/watched`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setWatched(res.data))
      .catch((err) => console.log("Error: ", err));
    axios
      .get<IApiResponse[]>(`${BASE_URL}/users/${userId}/to-watch`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setToWatch(res.data))
      .catch((err) => console.log("Error: ", err));
  }, []);

  return (
    <>
      <VStack w="100%" justify={"left"}>
        <Text
          w={"100%"}
          fontSize="2xl"
          fontFamily="Work sans"
          paddingLeft={5}
          justifyItems={"left"}
        >
          Favourite
        </Text>
        <CardsList
          page={1}
          results={loved}
          total_pages={0}
          total_results={0}
          page_name={""}
        />
        <Text
          w={"100%"}
          fontSize="2xl"
          fontFamily="Work sans"
          paddingLeft={5}
          justifyItems={"left"}
        >
          To Watch
        </Text>
        <CardsList
          page={1}
          results={toWatch}
          total_pages={0}
          total_results={0}
          page_name={""}
        />
        <Text
          w={"100%"}
          fontSize="2xl"
          fontFamily="Work sans"
          paddingLeft={5}
          justifyItems={"left"}
        >
          Watched
        </Text>
        <CardsList
          page={1}
          results={watched}
          total_pages={0}
          total_results={0}
          page_name={""}
        />
      </VStack>
    </>
  );
}
