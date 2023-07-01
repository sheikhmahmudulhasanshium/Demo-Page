import React, { FunctionComponent } from 'react'
import { ICategories } from '../type'

const Cat_Menu_bar_controller:FunctionComponent<{category:ICategories}> = ({category:{id,category_name,url}}) => {
  return (
            <div className='px-2'><a className='hover:underline' href={url}>{category_name}</a></div>         
        )
}

export default Cat_Menu_bar_controller
