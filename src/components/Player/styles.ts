import styled from '@emotion/styled';

export const StyledPlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  z-index: 999999;

  .rhap_container {
    background: #10141d !important;
  }

  .rhap_volume-indicator,
  .rhap_progress-indicator,
  .rhap_progress-filled {
    background: #1a76d2;
  }

  button,
  .rhap_time {
    color: white;
  }
`;
