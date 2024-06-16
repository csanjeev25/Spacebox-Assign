import React from "react"
import { ListEmptyScreen } from "src/components"
import { testIdProps } from "src/utils"
import { strings } from "src/values"

const withBaseComponent = () => {
  return (WrappedComponent: React.FC) =>
    class BaseComponent extends React.Component {
      constructor(props: any) {
        super(props)
        this.state = {
          hasError: false,
        }
      }

      componentDidMount() {
        //Logging
      }

      componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        //Error Reporting
      }

      static getDerivedStateFromError() {
        return { hasError: true }
      }

      render() {
        if (this.state.hasError) {
          return (
            <ListEmptyScreen
              displayText={strings.somethingWentWrong}
              {...testIdProps("list-empty-component")}
            />
          )
        }
        return <WrappedComponent {...this.props} />
      }
    }
}

export default withBaseComponent
