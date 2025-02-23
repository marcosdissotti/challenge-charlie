import styled, { css } from 'styled-components';

import hexToRgba from '@utils/hexToRgba';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;
    max-height: 90%;

    color: ${theme.colors.white};

    main {
      height: 65%;

      display: flex;

      background: ${hexToRgba(theme.colors.primary, 0.85)};

      .icon-weather-wrapper {
        width: 55%;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 22rem;
        color: ${theme.colors.white};

        @media (min-width: ${theme.breakpoints.qHd}) {
          font-size: 25rem;
        }

        @media (max-width: ${theme.breakpoints.hd}) {
          font-size: 16rem;
        }

        @media (max-width: ${theme.breakpoints.mobile}) {
          font-size: 18rem;
        }

        @media (max-width: ${theme.breakpoints.tablet}) {
          font-size: 16rem;
        }

        @media (max-width: ${theme.breakpoints.smartphone}) {
          font-size: 12rem;
        }

        span {
          line-height: 0;
        }
      }

      .weather-info-wrapper {
        width: 45%;
        height: 100%;

        .weather-info-temperature {
          height: 20%;
          padding-top: 1.3rem;

          font-size: 2rem;
          cursor: pointer;
          font-family: 'Ubuntu';

          @media (min-width: ${theme.breakpoints.qHd}) {
            font-size: 2.2rem;
          }

          @media (max-width: ${theme.breakpoints.smartphone}) {
            font-size: 1.4rem;
          }
        }

        .weather-info-details {
          height: 60%;

          display: flex;
          flex-direction: column;
          justify-content: center;

          font-weight: 500;
          font-size: 1.5rem;
          letter-spacing: 0.02em;

          @media (min-width: ${theme.breakpoints.qHd}) {
            font-size: 2rem;
          }

          @media (max-width: ${theme.breakpoints.smartphone}) {
            font-size: 1.1rem;
          }

          h1 {
            margin-bottom: 16px;

            font-size: 2.4rem;
            text-transform: capitalize;

            @media (min-width: ${theme.breakpoints.qHd}) {
              font-size: 3rem;
            }

            @media (max-width: ${theme.breakpoints.smartphone}) {
              font-size: 2rem;
            }
          }
        }
      }
    }

    footer {
      height: 35%;

      font-size: 1.5rem;

      @media (min-width: ${theme.breakpoints.qHd}) {
        font-size: 2rem;
      }

      @media (max-width: ${theme.breakpoints.smartphone}) {
        font-size: 1rem;
      }

      .weather-info {
        height: 50%;

        display: flex;
        align-items: flex-end;
        flex-direction: column;
      }

      .weather-info-wrapper {
        width: 45%;
        padding-top: 16px;

        cursor: pointer;

        span {
          font-size: 2rem;
          font-family: 'Ubuntu';

          @media (min-width: ${theme.breakpoints.qHd}) {
            font-size: 2.2rem;
          }

          @media (max-width: ${theme.breakpoints.smartphone}) {
            font-size: 1.4rem;
          }
        }
      }

      .weather-tomorrow-info {
        background-color: ${theme.colors.primary};
      }
      .weather-after-tomorrow-info {
        background-color: ${theme.colors.secondary};
      }
    }
  `};
`;
