const MessageError = ({ errors }) => {
  if (errors) {
    return (
      <div className="not-found-text">
        El servidor no está disponible temporalmente, inténtelo más tarde!
      </div>
    )
  }

  return (
    <div className="not-found-text">
      No podemos encontrar el elemento buscado :(
      <div>
        Usted puede intentar realizar una nueva búsqueda por favor!
      </div>
    </div>
  )
}

const ItemNotFound = (props = {}) => (
  <div className="limits">
    <div className="not-found">
      <MessageError message={props} />
      <style jsx>{`
        .not-found {
          font-size: 14px;
          text-align: center;
          min-height: 600px;
          padding-top: 20px;
        }
      `}</style>
    </div>
  </div>
)

export default ItemNotFound
