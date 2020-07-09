import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleText = styled.h1`
    width: fit-content;
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;

    &:hover {
        color: grey;
    }
`;

export const PreviewContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
`;