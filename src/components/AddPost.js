import { useState } from "react";
import { useDispatch } from "react-redux";
import { Wrapper, Title, Button, ChooseAuthor, Input } from "./AddPostStyled";

const avatar1 =
  "https://pbs.twimg.com/profile_images/1393259395967078408/qbrUinsS_400x400.jpg";
const avatar2 =
  "https://pbs.twimg.com/profile_images/1299844050208555008/7wMQaJRA_400x400.jpg";
const avatar3 =
  "https://pbs.twimg.com/profile_images/1416443682157473795/dGtFbtht_400x400.jpg";

export default function AddPost() {
  const [authorName, setAuthorName] = useState("");
  const [postText, setPostText] = useState("");
  const [postpicture, setPostPicture] = useState("");

  const dispatch = useDispatch();

  const handleButtonClick = (e) => {
    e.preventDefault();
    dispatch(actionAddNewPost);
  };

  let avatar = "";
  let nickname = "";

  if (authorName === "Mark Hamill") {
    avatar = avatar1;
    nickname = "@HamillHimsel";
  } else if (authorName === "Ryan Reynolds") {
    avatar = avatar2;
    nickname = "@VancityReynolds";
  } else if (authorName === "Elon Musk") {
    avatar = avatar3;
    nickname = "@elonmusk";
  }

  const actionAddNewPost = {
    type: "add-new-post",
    payload: {
      authorName,
      avatar,
      nickname,
      postText,
      postpicture,
    },
  };

  return (
    <Wrapper>
      <Title>Please, choose author</Title>
      <ChooseAuthor
        id="select"
        onChange={(e) => setAuthorName(e.target.value)}
        value={authorName}
      >
        <option value="Mark Hamill">Mark Hamill</option>
        <option value="Ryan Reynolds">Ryan Reynolds</option>
        <option value="Elon Musk">Elon Musk</option>
      </ChooseAuthor>
      <Title>Enter your message</Title>
      <Input
        onChange={(e) => setPostText(e.target.value)}
        type="text"
        placeholder="What are you thinking about?"
        value={postText}
      ></Input>
      <Title>Paste your photo url</Title>
      <Input
        onChange={(e) => setPostPicture(e.target.value)}
        type="text"
        placeholder="http://..."
        value={postpicture}
      ></Input>
      <Button onClick={handleButtonClick}>Create New Post</Button>
    </Wrapper>
  );
}
