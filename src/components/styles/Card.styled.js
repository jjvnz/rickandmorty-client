import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 20px 0;
  padding: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column-reverse;
    padding: 20px;

    img {
      width: 100%;
      margin-bottom: 20px;
    }
  }

  & > div {
    flex: 1;

    h2 {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
    }

    span {
      font-size: 16px;
      color: #666;
      margin-bottom: 10px;
    }

    hr {
      border: none;
      height: 1px;
      background-color: #ddd;
      margin: 10px 0;
    }
  }
`;
