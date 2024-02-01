import { setNovitaKey, txt2ImgSync } from "novita-sdk";
export default function Home() {
  setNovitaKey("your api key");
  const params = {
    model_name: "sd_xl_base_1.0.safetensors",
    prompt: "1 girl",
  };
  txt2ImgSync(params)
    .then((res) => {
      console.log("img", res);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <></>
    </main>
  );
}
