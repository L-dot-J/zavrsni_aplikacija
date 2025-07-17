import { Unity, useUnityContext } from "react-unity-webgl";

export default function UnityComponent({ build }) {
  const base = "/" + build + "/";
  const { unityProvider } = useUnityContext({
    loaderUrl: base + "Lokva_novi.loader.js",
    dataUrl: base + "Lokva_novi.data",
    frameworkUrl: base + "Lokva_novi.framework.js",
    codeUrl: base + "Lokva_novi.wasm",
  });

  return (
    <div className="w-full aspect-[16/9]">
        <Unity
            unityProvider={unityProvider} className="w-full aspect-[16/9]"
        />
    </div>
  );
}