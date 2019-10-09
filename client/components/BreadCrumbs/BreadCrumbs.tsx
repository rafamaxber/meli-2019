import * as Styled from './style'
import * as Common from '../Common/main.styled'

interface BreadCrumbs {
  /**
   * Set this to show breadcrumb items
   */
  steps: string[]
}

const Arrow = ({ show }) => show ? (
  <svg width="15" height="15" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <g fill="#999999" fillRule="evenodd">
      <path d="M6.646 5.354l4 4 .354.353.707-.707-.353-.354-4-4L7 4.293 6.293 5z"></path>
      <path d="M7.354 13.354l4-4L11.707 9 11 8.293l-.354.353-4 4-.353.354.707.707z"></path>
    </g>
  </svg>
) : null;

function BreadCrumbs({ steps }: BreadCrumbs): JSX.Element {
  if (!steps || !steps.length) return null
  const stepsList = steps.map((item, index, array) => {
    return (
      <Styled.BreadCrumbItem key={index}>
        { item }
        <Arrow show={Boolean(array[index + 1])} />
      </Styled.BreadCrumbItem>)
  });

  return (
    <Common.Limit>
      <Styled.BreadCrumb aria-label="Breadcrumb">
        <Styled.BreadCrumbList>
          {stepsList}
        </Styled.BreadCrumbList>
      </Styled.BreadCrumb>
    </Common.Limit>
  )
}

export default BreadCrumbs
