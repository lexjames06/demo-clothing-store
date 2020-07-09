import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleText = styled.h1`
    display: flex;
    flex-direction: column;

    &:hover {
        cursor: pointer;
    }
`;

export const PreviewContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
`;