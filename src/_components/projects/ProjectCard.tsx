import { Image, Button } from "@nextui-org/react";
import { Github, Globe, Settings2 } from 'lucide-react';

// App imports
import { ProjectType } from "@constants/projects/types";
import AnimationSlideOnShow from "@animations/AnimationSlideOnShow";
import { useState } from "react";

type ProjectCardProps = ProjectType & {
  isFromRight: boolean
}

export default function ProjectCard({
  title,
  description,
  repositoryURL,
  liveURL,
  processURL,
  image,
  tags,
  year,
  isFromRight
}: ProjectCardProps) {
  const [isFullImageShown, setIsFullImageShown] = useState(false)

  function showFullImage() {
    setIsFullImageShown(true)
  }

  function hideFullImage() {
    setIsFullImageShown(false)
  }

  return (
    <>
      <div className="break-inside-avoid-column">
        <AnimationSlideOnShow isFromRight={isFromRight}>
          <div className="border rounded-xl bg-background w-full overflow-hidden relative hover:border-primary transition-all duration-500 ease-in-out">
            <div
              className={`absolute z-20 rounded-xl bg-center bg-cover w-full h-full opacity-0 pointer-events-none transition-all ease-in-out duration-1000  ${isFullImageShown && 'opacity-100'}`}
              style={{ backgroundImage: `url(${image})` }}
            >
              <Image
                radius={'none'}
                src={image}
                classNames={{
                  wrapper: 'object-scale-down h-full mx-auto rounded-xl backdrop-blur-[12px]',
                  img: 'object-scale-down h-full mx-auto rounded-xl backdrop-blur-[12px]'
                }}
              />
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-6">
                <div className="flex h-full w-full p-5">
                  <div className="my-auto w-full">
                    <div className="space-y-2 md:space-y-2">
                      <p className="font-bold text-sm">{title} {'･'} {year}</p>
                      <p className="text-xs">{description}</p>
                    </div>
                    <div className="mt-4 flex gap-1 flex-wrap items-center">
                      {tags.map((tag) => (
                        <div className="border rounded-lg p-1" key={`ProjectTag-${title}-${tag}`}>
                          <p className="text-[10px]">{tag}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 md:mt-8 flex gap-2 flex-wrap">
                      <a href={repositoryURL} target='_blank'>
                        <Button
                          size='sm'
                          color='primary'
                          startContent={<Github size={15} />}
                          className='!text-[10px] !p-2'
                        >
                          See repository
                        </Button>
                      </a>
                      {liveURL && <>
                        <a href={liveURL} target='_blank'>
                          <Button
                            size='sm'
                            variant={'flat'}
                            startContent={<Globe size={15} />}
                            className='!text-[10px] !p-2'
                          >
                            See live
                          </Button>
                        </a>
                      </>}
                      {processURL && <>
                        <a href={processURL} target='_blank'>
                          <Button
                            size='sm'
                            variant={'flat'}
                            startContent={<Settings2 size={15} />}
                            className='!text-[10px] !p-2'

                          >
                            See process
                          </Button>
                        </a>
                      </>}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-span-12 sm:col-span-6"
                onMouseEnter={showFullImage}
                onMouseLeave={hideFullImage}
                onTouchStart={showFullImage}
                onTouchMove={hideFullImage}
              >
                <Image
                  radius={'none'}
                  src={image}
                  isBlurred 
                  classNames={{
                    wrapper: 'object-cover w-full sm:h-full sm:w-fit',
                    img: 'w-full sm:h-full sm:w-fit object-cover'
                  }}
                />
              </div>
            </div>
          </div>
        </AnimationSlideOnShow>
      </div>
    </>
  )
}
