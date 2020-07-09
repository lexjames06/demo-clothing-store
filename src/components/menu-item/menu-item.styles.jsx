import styled, { css } from 'styled-components';

const large = css`
    height: 380px;
`;

const checkSize = props => {
    if(props.size) {
        return large;
    }
}

export const BackgroundImageContainer = styled.div`
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
`;

export const ContentContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    opacity: 0.7;
    position: absolute;
`;

export const TitleText = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;

export const SubtitleSpan = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        & ${BackgroundImageContainer} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        & ${ContentContainer} {
            opacity: 0.9;
            transition: all 0.2s ease-out;
        }
    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    ${checkSize}
`;