import React from 'react'

const ProjectList = ({ ContentAll, ContentSale }) => {
  return (
    <div className='projectList'>
      {ContentAll.map(el => (
        <div className='project' id={el.id}>
          <h1>{el.heading}</h1>
          <p>{el.specification}</p>
          <a href='/'>{el.link ? '' : 'Прием заявок завершен'} &rarr;</a>
        </div>
      ))}
      {ContentSale.map(el => (
        <div className='projectSale' id={el.id}>
          <h1>{el.textFirst}</h1>
          <h1>{el.textSec}</h1>
          <a href={el.link}>{el.linkText}</a>
        </div>
      ))}
    </div>
  )
}

export default ProjectList