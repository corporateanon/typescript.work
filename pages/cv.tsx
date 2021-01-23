import { FC } from 'react';
import { ContentPage } from '../components/ContentPage';
import { CVView } from '../components/CVView';
import data from '../data/cv.yaml';

const Page: FC = () => {
    return (
        <ContentPage>
            <CVView data={data} />
        </ContentPage>
    );
};
export default Page;
