import { useState } from "react";
import styled from "styled-components";
import Form from "./components/Form";
import List from "./components/List";
import { People } from "./interfaces";

const Wrapper = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
`
function App() {
  const [people, setPeople] = useState<People>([{
    name: "malsa nirmala",
    imageUrl: "https://profile-images.xing.com/images/6cfc55ec22b1c2b4e7473d4e97aa299d-1/malsa-nirmala-rusli.1024x1024.jpg",
    age: 29,
    note: "i will bring some chips",
  }])
  return (
    <Wrapper className="inviting">
      <h1>
        People invited to my party
      </h1>
      <List people={people} />
      <Form people={people} setPeople={setPeople} />
    </Wrapper>
  );
}

export default App;
