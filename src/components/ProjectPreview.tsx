import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface ProjectPreviewProps {
  src?: string;
  className?: string;
  videoStyle?: React.CSSProperties;
  ratio?: number;
}

const ProjectPreview = ({ src, className, videoStyle, ratio = 16 / 9 }: ProjectPreviewProps) => {
  if (!src) return null;

  return (
    <div className={cn("relative w-full overflow-hidden rounded-xl", className)}>
      <AspectRatio ratio={ratio}>
        <video
          src={src}
          muted
          autoPlay
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback"
          style={videoStyle}
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  );
};

export default ProjectPreview;
