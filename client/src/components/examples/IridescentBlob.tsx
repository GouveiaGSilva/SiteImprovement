import IridescentBlob from "../IridescentBlob";

export default function IridescentBlobExample() {
  return (
    <div className="relative h-96 bg-black overflow-hidden">
      <IridescentBlob 
        className="w-96 h-96 top-10 left-10" 
      />
      <IridescentBlob 
        className="w-80 h-80 bottom-10 right-10" 
      />
    </div>
  );
}
