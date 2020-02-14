import React, { Component } from 'react';

import '../../styles/Reviews.css'
import Foto from '../../img/foto.png'


export default class ReviewsBlock extends Component {
    render() {
             
               
       return (<div className='reviews_block' >
                    <div className='reviews_text'>
                        <p>Lorem Ipsum - это текст-"рыба", часто используемый в 
                            печати и вэб-дизайне. Lorem Ipsum является стандартной
                            "рыбой" для текстов на латинице с начала XVI века. В то время 
                            некий безымянный печатник создал большую коллекцию размеров и форм
                            шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum -
                            это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                        </p>
                    </div>
                    <div className ='reviews_data'>
                        <div className ='reviews_data_foto'>
                            <img src={Foto} alt="#"></img>
                
                        </div>
                        <div className ='reviews_data_info'>                                
                            <h3>Екатерина Иванова</h3>
                            <p>Директор ООО “Раз-два”</p>                                      
                        </div>
                    </div>
                </div>


       )
    }
}