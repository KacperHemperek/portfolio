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
        'Angular 2+',
        'TypeScript',
        'styled-components',
        'Material-UI',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati harum, accusamus, repellat dolor vero hic quam quaerat dignissimos adipisci omnis nulla aut aliquid praesentium, voluptates laudantium reprehenderit at cumque distinctio.',
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati harum, accusamus, repellat dolor vero hic quam quaerat dignissimos adipisci omnis nulla aut aliquid praesentium, voluptates laudantium reprehenderit at cumque distinctio.',
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
