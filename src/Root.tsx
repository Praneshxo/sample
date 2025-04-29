import { Composition } from "remotion";
import { FamilyTree } from "./FamilyTree"; // Import t
// Define the structure of the data (still useful for type safety)


export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FamilyTree"
        component={FamilyTree}
        durationInFrames={150} // Adjust duration if needed
        fps={30}
        width={1920}
        height={1080}
        
        // Pass the static data as defaultProps
        
      />
      {/* You could add more compositions here if needed */}
    </>
  );
};

export default RemotionRoot;