import * as Common from '../Common/main.styled'
import * as Styled from './style'

const Loading = () => (
  <Common.Limit>
    <Styled.Loading>
      <Styled.LoadingIcon
        src="/static/img/spinner.gif"
        title="Carregando..."
        alt="Carregando..."
      />
    </Styled.Loading>
  </Common.Limit>
)

export default Loading
