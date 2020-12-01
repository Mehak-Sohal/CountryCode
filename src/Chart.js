import React from 'react'
import {overall_budget, spending, income} from './data.json'


const Chart = () => {
    
    return (
        <div>
           { spending.map((spendings)=> (
               <h4 key={spendings.month}>{spendings.month} {spendings.spending} </h4>
           )
           ) }

           { income.map((incomes)=> (
               <h4 key={incomes.month}>{incomes.month} {incomes.income} </h4>
           )
           ) } 
        </div>


    )
}

export default Chart
