import styled from "styled-components";
export const ProjectWrapper = styled.div`

    .desc {
      word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 这里是超出几行省略 */
    overflow: hidden;
  }
  .link {
    color:black;
    &:hover {
      color:blue;
    }
  }

`