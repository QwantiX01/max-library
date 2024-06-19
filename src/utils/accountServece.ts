import data from "../dataAccount.json";
import dataSource from "../dataSource.json";
import { array, object } from "prop-types";

export function GetAccount() {
  const currentAccountId = data.current;
  let user = data.accounts.find((account) => account.id === currentAccountId);
  if (user.img === "default") {
    user.img = "src/assets/react.svg";
  }
  return user;
}

export function GetLikedDocs(user) {
  let ananas = Array();
  let likedById = user.likedById;
  for (let likedByIdKey in likedById) {
    ananas.push(dataSource.docs.find((doc) => doc.id == likedByIdKey));
  }

  console.log(ananas);
  return ananas;
}
