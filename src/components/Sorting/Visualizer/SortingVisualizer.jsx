import React from 'react';
import { useState, useEffect } from 'react';
import { Form,Row,Col,Button } from 'react-bootstrap';
import { getMergeSortAnimations } from '../Algorithms/MergeSort';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 10;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 33;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'blue';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

const SortingVisualizer = () => {

  const [ arrayToSort, setArrayToSort ] = useState([]);
  const [ optionSetected, setOptionSelected ] = useState("nothing");
  const [ speed, setSpeed ] = useState(ANIMATION_SPEED_MS);
  const [ enabled, setEnabledState ] = useState(true);

    const resetArray = () => {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
          array.push(randomIntFromInterval(200, 400));
        }
        setArrayToSort(array);
      };

      const randomIntFromInterval = (min, max) => {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

      const resetArrayHandler = () => {
        resetArray();
      };

      const optionSelectHandler = (e) => {
        if(e.target.value!=="nothing"){
            setOptionSelected(e.target.value);
        }
      };

      const sortHandler = () => {
        if(optionSetected==="merge-sort"){
            mergeSort();
        }
        else{

        }
      };

      const speedHandler = (e) => {
        if(e.target.value==="high"){
            setSpeed(ANIMATION_SPEED_MS);
        }
        else if(e.target.value==="normal"){
            setSpeed(100);
        }
        else if(e.target.value==="low"){
            setSpeed(1000);
        }
        else{
            setSpeed(ANIMATION_SPEED_MS);
        }
      };

      useEffect(()=>resetArray(),[]);

      const setEnabled = () => {
        setEnabledState(!enabled);
      };

      function refreshPage() {
        window.location.reload(false);
      }

      const mergeSort = () => {
        setEnabled();
        const animations = getMergeSortAnimations(arrayToSort);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * speed);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barOneElement = arrayBars[barOneIdx];
              barOneStyle.height = `${newHeight}px`;
              barOneElement.innerHTML = `${newHeight}`;
            }, i * speed);
          }
        }
      };
    

  return (
    <>
    <Row style={{marginBottom:"30px"}}>
        <Col md="3">
        <Form.Select disabled={!enabled} onChange={(e)=>optionSelectHandler(e)}>
          <option value="nothing">Select An Algorithm</option>
          <option value="merge-sort">Merge Sort</option>
          <option value="insertion-sort">Insertion Sort</option>
          <option value="bubble-sort">Bubble Sort</option>
        </Form.Select>
        </Col>
        <Col md="3"><Button disabled={!enabled} onClick={() => resetArrayHandler()} className='btn btn-success'>Reset Array</Button></Col>
        <Col md="3">
        <Form.Select disabled={!enabled} onChange={(e)=>speedHandler(e)}>
          <option value="nothing">Select Animation Speed</option>
          <option value="high">HIGH</option>
          <option value="normal">NORMAL</option>
          <option value="low">LOW</option>
        </Form.Select>
        </Col>
        <Col md="3"><Button disabled={!enabled} onClick={()=>sortHandler()} className='btn btn-success'>Start Sorting</Button>
        <Button style={{marginLeft:"5px"}} disabled={enabled} onClick={()=>{
            setEnabledState(true);
            refreshPage();
            }} className='btn btn-danger'>Stop Sorting</Button>
        </Col>
      </Row>
      <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",height:"420px",border:"2px black solid"}} className='m-2'>{arrayToSort.map((value, idx) => (
        <div className='array-bar' style={{height:`${value}.px`,overflow:"hidden",backgroundColor:"blue",maxWidth:"35px",color:"white",display:"inline-block"}} key={idx}>{value}</div>
        ))}
    </div>
    </>
  );
};

export default SortingVisualizer;