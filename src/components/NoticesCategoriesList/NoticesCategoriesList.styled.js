import styled from 'styled-components';

export const NoticeList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;

  width: 320px;

  margin-top: 24px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 768px;
    margin-top: 40px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const NoResults = styled.div`
  text-align: center;
  padding-top: 40px;

  color: ${p => p.theme.colors.black};
  font-family: Manrope500, sans-serif;
  font-size: 20px;

  @media (min-width: 768px) {
    padding-top: 80px;
    font-size: 25px;
  }
`;

export const Span = styled.span`
  font-family: Manrope700, sans-serif;
  color: ${p => p.theme.colors.grey};
`;

export const LoaderWrapper = styled.div`
  margin-top: 30px;
`;
