import { useQuery } from '@apollo/client';
import GetCVGraphql from './GetCV.graphql';

export const useCV = () => {
    return useQuery(GetCVGraphql);
};
