import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      {/* <div>
        <a href="http://go/prodsec" target="_blank" rel="noopener noreferrer">Version</a>
        <span className="ml-1">&copy; 2021 Product Security.</span>
      </div> */}
      <div className="mfs-auto">
        <span className="ml-1">Service Operated by </span>
        <a href="http://go/prodsec" target="_blank" rel="noopener noreferrer">Databricks Product Security</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
