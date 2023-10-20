import React from 'react';
import SectionHeading from '~/components/common/section-heading';
import WorkItem, { WorkItemProps } from '~/components/common/work-item';

export default function ExperienceSection() {
  const workItemsList: Omit<WorkItemProps, 'last'>[] = [
    {
      number: '01',
      position: 'Frontend Developer',
      companyName: 'Apptimia',
      companyUrl: 'https://apptimia.com',
      endDate: 'Present',
      startDate: 'October 2022',
      skills: [
        'React',
        'Electron',
        'Angular 2+',
        'TypeScript',
        'styled-components',
        'Angular Material',
        'SASS',
      ],
      description:
        'Creating desktop application that is a part of a system used for testing RPAs with Electron, React and styled-components. Building block based UIs with react flow and using Electron APIs to read, save, translate files, capture desktop windows and much more. Maintaining angular application that is centered around working with a map and displaying data and photos on it. This application uses Mapbox GL JS, Angular Material and SASS.',
    },
    {
      number: '02',
      position: 'Junior Frontend Developer',
      companyName: 'Delivence',
      companyUrl: 'https://www.linkedin.com/company/webbespokers/',
      startDate: 'May 2022',
      endDate: 'July 2022',
      skills: ['React', 'TypeScript', 'TailwindCSS', 'Vue.js', 'Recharts'],
      description:
        'Building data driven applications with React and TypeScript. Creating reusable components and using TailwindCSS for styling. Creating graphs in React application with Recharts. Learning Vue.js and creating a simple application with it.',
    },
  ];

  return (
    <section id='experience'>
      <SectionHeading title='Experience' number='01' />
      <div className='flex flex-col py-16'>
        {workItemsList.map((workItem, index) => (
          <WorkItem
            key={'work__item__' + workItem.companyName + index}
            number={workItem.number}
            position={workItem.position}
            companyName={workItem.companyName}
            companyUrl={workItem.companyUrl}
            endDate={workItem.endDate}
            startDate={workItem.startDate}
            description={workItem.description}
            skills={workItem.skills}
            last={index === workItemsList.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
