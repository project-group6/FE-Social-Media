import { useState } from "react";
import PostCard from "components/PostCard";
import Layout from "components/Layout";
import Register from "./Auth/Register";

function App() {
  return (

       <>
        <Layout> 
        <PostCard />
        </Layout>
        </>
  );
}

export default App;
