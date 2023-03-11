import BUNDLE from '@assets/images/projects/bundle.svg';
import CODEWIAN from '../assets/images/projects/codewian.svg';

import NOT_FOUND from '../assets/images/projects/notFound.svg';

export const PROJECT_LIST = [
    {
        id: 1,
        panelContent: 1,
        name: 'Bundle',
        image: BUNDLE,
        description:
            '«Bundle» — компания, которая занимается сборкой компьютеров под ваши цели и задачи. Это коммерческий проект, полностью со своим разрабатывающимся ПО.',
        title: ['Next.JS', 'MUI', 'Redux', 'SASS'],
        titleCode: 'Код',
        linkCode: '',
        titleProject: 'Проект',
        linkProject: 'https://bundle-landing.vercel.app/team',
    },
    {
        id: 2,
        panelContent: 2,
        name: 'Sound Wave',
        image: NOT_FOUND,
        description: 'Проект не найден',
        title: ['React.JS', 'HTML', 'SASS'],
        titleCode: 'Код',
        linkCode: '',
        titleProject: 'Проект',
        linkProject: '',
    },
    {
        id: 3,
        panelContent: 3,
        name: 'Codewian',
        image: CODEWIAN,
        description:
            'Портфолио написанное на NEXT.JS c использование MUI. Есть небольшая информация обо мне,ссылки на социальные сети и проекты!',
        title: ['Next.JS', 'SASS', 'MUI'],
        titleCode: 'Код',
        linkCode: '',
        titleProject: 'Проект',
        linkProject: '',
    },
];
