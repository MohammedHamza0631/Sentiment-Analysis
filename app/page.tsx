"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { emotionConfig } from "./config";
import { Vortex } from "react-loader-spinner";

type Predictions = {
  label: string;
  score: number;
}

export default function Home() {
  const defaultColor = "#f0e7db";
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<Predictions[]>();
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [color, setColor] = useState(defaultColor);
  const [tagsVisible, setTagsVisible] = useState(false);

  useEffect(() => {
    const inputTimer = setTimeout(() => {
      runPredictions();
    }, 1000)

    return () => {
      clearTimeout(inputTimer);
    }
  }, [input]);

  async function runPredictions() {
    if (input) {
      setLoading(true);
      setTagsVisible(false);
      // send api call
      const res = await axios.post("api/emotion", { input });
      // console.log(res.data);
      setOutput(res.data.filteredResponse);
      setLoading(false);
    }
  }

  useEffect(() => {
    handleColor(output);
    setTagsVisible(true);
  }, [output]);

  function handleColor(output: Predictions[] | undefined) {
    if (output && output.length > 0) {
      const colorKey = output[0].label;
      const colorHex = emotionConfig[colorKey].colorHex;
      setColor(colorHex);
    }
  }
  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    setInput(event.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }
  function renderLoader(): import("react").ReactNode {
    return (
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    )
  }

  return (
    <main style={{ backgroundColor: color + 'aa' }} className="transition-all delay-200 flex min-h-screen gap-4 flex-col items-center p-24">
      <h1 className="lg:text-4xl text-2xl font-mono font-bold text-center">🎨🖌️ Visualize your Emotions </h1>

      <div className="w-1/2 min-w-80">
        <Textarea placeholder="type your text here..."
          value={input}
          onChange={handleInputChange}
          ref={textareaRef}
          rows={1} />
      </div>
      <p>{input}</p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {output?.map((prediction, index) => {
          return <span style={{ opacity: tagsVisible ? 1 : 0 }} key={index} className="transition-all delay-300 cursor-pointer bg-indigo-200 text-indigo-800 text-lg px-4 py-1 rounded-full border border-indigo-400">{prediction.label} {emotionConfig[prediction.label].emoji}</span>
        })}
      </div>
      {loading && renderLoader()}
    </main>
  );
}





