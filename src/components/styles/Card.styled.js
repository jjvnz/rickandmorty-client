import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column-reverse;
    padding: 20px;
    
    img {
      order: -1;
      width: 100%;
    }
    
    div {
      order: 1;
    }
  }
  
  & > div {
    flex: 1;
    
    h2 {
      font-size: 24px;
      color: #333;
    }
    
    span {
      font-size: 16px;
      color: #666;
    }
    
    hr {
      border: none;
      height: 1px;
      background-color: #ddd;
      margin: 10px 0;
    }
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
    }      
`;
