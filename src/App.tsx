import { useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

import { createAIHooks } from "@aws-amplify/ui-react-ai";

const client = generateClient<Schema>();
const { useAIGeneration } = createAIHooks(client);


function App() {

  const [{ data, isLoading }, generateNews] = useAIGeneration("generateNews");
  const [mood, setMood] = useState("");

  
  const generateNow = async () => {
    // const { data: newsData, errors } = await client.queries.getNews({});

    const response = await fetch('https://api.thenewsapi.com/v1/news/top?api_token=FWLMxOz0vFti9cTYIbyUuI0xhIy4XOKOEynpdWxl&locale=us&limit=3')
    const newsData = await response.text()
    // if (errors) {
    //   console.log(errors)
    // }
    generateNews({
      description: newsData,
      mood: mood,
    });
  }

  return (
    <main>
      <h1>The Moody News</h1>
      <h2>What is your mood?</h2>
      <input type="text" onChange={(ref)=>setMood(ref.target.value)} />
      <br />
      <button onClick={generateNow}>Get News</button>
      <br />
      {isLoading ? ("loading") : (
        <>
          <h4 style={{ maxWidth: "400px"}}>{data?.title}</h4>
          <p style={{ maxWidth: "400px", whiteSpace: "pre-wrap"}}>{data?.summary}</p>
        </>
      )}
    </main>
  );
}

export default App;
