import './App.css';
import ProjectList from './components/ProjectList';

const contentAll = [
  {
    id: 1,
    heading: 'Кадровое агентство',
    specification: 'Портал для работы с вакансиями и кандидатами',
    link: false
  },
  {
    id: 2,
    heading: 'Короткие ссылки',
    specification: 'Сервис укорачивания ссылок и сбора аналитики о кликах',
    link: false
  },
  {
    id: 3,
    heading: 'Райда',
    specification: 'Платформа для управления процессами',
    link: false
  },
  {
    id: 4,
    heading: 'Записная книжка',
    specification: 'Управление нетворком человека или организации',
    link: false
  },
  {
    id: 5,
    heading: 'Портфолио проектов',
    specification: 'Управление списком проектов и стажировок',
    link: false
  },
];
const contentSale = [
  {
    id: 1,
    textFirst: 'Не нашли проект для старта?',
    textSec: 'Пришлем письмо на почту, когда появится новый набор',
    link: '/',
    linkText: 'Оставить контакты'
  }
]

const App = () => {
  return (
    <>
      <h1>Открытые проекты</h1>
      <ProjectList ContentAll={contentAll} ContentSale={contentSale} />
    </>
  );
}



export default App;
