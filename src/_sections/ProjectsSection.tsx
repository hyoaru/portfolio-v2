import { FolderGit2 } from 'lucide-react';

// App imports
import { EvervaultCard } from '@components/ui/EvervaultCard';
import ProjectsFeed from '@components/projects/ProjectsFeed';

export default function ProjectsSection() {
  return (
    <>
      <div className="columns-1 space-y-4 lg:columns-2 lg:space-y-8" id='ProjectsSection'>
        <div className="border rounded-xl break-inside-avoid-colum w-full overflow-hidden dark:border-primary">
          <EvervaultCard>
            <div className="flex items-center gap-4 p-5 text-foreground dark:text-primary">
              <div className="">
                <FolderGit2 size={30} className='' />
              </div>
              <div className="">
                <p className="text-sm font-bold md:text-base">{"Projects I have worked on"}</p>
                <p className='text-xs md:text-sm'>{"Solo projects I've done along with some collaborative ones"}</p>
              </div>
            </div>
          </EvervaultCard>
        </div>

        <ProjectsFeed />
      </div >
    </>
  )
}
