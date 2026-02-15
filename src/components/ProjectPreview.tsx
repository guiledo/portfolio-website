import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface ProjectPreviewProps {
  src?: string;
  className?: string;
}

const ProjectPreview = ({ src, className }: ProjectPreviewProps) => {
  if (!src) return null;

  return (
    <div className={cn("relative w-full overflow-hidden rounded-xl", className)}>
      <AspectRatio ratio={16 / 9}>
        <video
          src={src}
          muted
          autoPlay
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  );
};

export default ProjectPreview;
