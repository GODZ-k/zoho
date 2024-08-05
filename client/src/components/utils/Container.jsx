import React from 'react'

function Container({children , className}) {
  // Check if custom className contains padding-top (pt-) class
  const hasCustomPadding = /pt-\d+/g.test(className);

  // Only include the default padding if no custom padding is provided
  const paddingClass = hasCustomPadding ? '' : 'pt-28';

  return (
    <div className={`${ className } ${paddingClass}`}>{children} </div>
  )
}

export default Container