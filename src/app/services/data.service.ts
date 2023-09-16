import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  signup(email:any,username:any,password:any){

    let data={
      email,
      username,
      password
    }

    return fetch('http://127.0.0.1:8000/user/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  signin(username:any,password:any){

    let data={
      username,
      password
    }
    return fetch('http://127.0.0.1:8000/token', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  admin(username:any,password:any){

    let data={
      username,
      password
    }
    return fetch('http://127.0.0.1:8000/token', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  adminp(username:any,password:any){

    let data={
      username,
      password
    }
    return fetch('http://127.0.0.1:8000/token', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  addProduct(data:any){
    return fetch('http://127.0.0.1:8000/question/',{
      method: 'POST',
      body:data,
      headers: {
      'Accept': '*/*',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  addProducts(data:any){
    return fetch('http://127.0.0.1:8000/questionp/',{
      method: 'POST',
      body:data,
      headers: {
      'Accept': '*/*',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  getProduct(){
    return fetch('http://127.0.0.1:8000/question/',{
      method: 'GET',
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  getProducts(){
    return fetch('http://127.0.0.1:8000/questionp/',{
      method: 'GET',
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  getProductss(){
    return fetch('http://127.0.0.1:8000/answer/',{
      method: 'GET',
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  getProductsss(){
    return fetch('http://127.0.0.1:8000/police/',{
      method: 'GET',
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  getComplainto(){
    return fetch('http://127.0.0.1:8000/question/',{
      method: 'GET',
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  getComplaintp(){
    return fetch('http://127.0.0.1:8000/questionp/',{
      method: 'GET',
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  // addPro(reply:any,id:any){
  //   let data={
  //     reply
  
  //   }
  //   return fetch(`http://127.0.0.1:8000/question/${id}/add_answer/`,{
  //     method: 'POST',
  //     body:JSON.stringify(data),
  //     headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //     'Authorization':`Token ${localStorage.getItem('token')}`
  //     },
  //   })
  // }


  getDisplayyy(id:any){

    return fetch(`http://127.0.0.1:8000/question/${id}/`,{
      method: 'GET',
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  updateProducts(id:any,reply:any){
    let data={
      reply
    }
    return fetch(`http://127.0.0.1:8000/question/${id}/add_answer/`, {
    method: 'POST',
    body:JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
  })
  }


  deleteProduct(id:any){
    return fetch(`http://127.0.0.1:8000/question/${id}/`,{
      method: 'DELETE',
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  deleteProducts(id:any){
    return fetch(`http://127.0.0.1:8000/answer/${id}/`,{
      method: 'DELETE',
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  getAnswer(){
    return fetch('http://127.0.0.1:8000/answer/',{
      method: 'GET',
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  getSpecificProduct(id:any){
    return fetch(`http://127.0.0.1:8000/question/${id}/`,{
      method: 'GET',
      headers: {
      // 'Content-type': 'application/json; charset=UTF-8',
      'Accept':'*/*',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  updateProduct(id:any,data:any){
    return fetch(`http://127.0.0.1:8000/question/${id}/`, {
    method: 'PATCH',
    body:data,
    headers: {
      'Accept':'*/*',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
  })
  }

  getSpecificProducts(id:any){
    return fetch(`http://127.0.0.1:8000/answer/${id}/`,{
      method: 'GET',
      headers: {
      // 'Content-type': 'application/json; charset=UTF-8',
      'Accept':'*/*',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  updateProductss(id:any,reply:any){
    let data={
      reply,
  
    }
    return fetch(`http://127.0.0.1:8000/answer/${id}/`, {
    method: 'PUT',
    body:JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
  })
}

  // getAnswerlist(id:any){

  //   return fetch(`http://127.0.0.1:8000/question/${id}/`,{
  //     method: 'GET',
  //     headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //     'Authorization':`Token ${localStorage.getItem('token')}`
  //     },
  //   })
  // }

  
  deleteProductp(id:any){
    return fetch(`http://127.0.0.1:8000/questionp/${id}/`,{
      method: 'DELETE',
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  updateProductp(id:any,data:any){
    return fetch(`http://127.0.0.1:8000/questionp/${id}/`, {
    method: 'PATCH',
    body:data,
    headers: {
      'Accept':'*/*',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
  })
  }

  getSpecificProductp(id:any){
    return fetch(`http://127.0.0.1:8000/questionp/${id}/`,{
      method: 'GET',
      headers: {
      // 'Content-type': 'application/json; charset=UTF-8',
      'Accept':'*/*',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  getDisplayp(id:any){

    return fetch(`http://127.0.0.1:8000/questionp/${id}/`,{
      method: 'GET',
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  updateProductsp(id:any,reply:any){
    let data={
      reply
    }
    return fetch(`http://127.0.0.1:8000/questionp/${id}/add_solution/`, {
    method: 'POST',
    body:JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
  })
  }

  getAnswers(){
    return fetch('http://127.0.0.1:8000/police/',{
      method: 'GET',
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  deletePoliceAnswer(id:any){
    return fetch(`http://127.0.0.1:8000/police/${id}/`,{
      method: 'DELETE',
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  getPoliceComplaints(id:any){
    return fetch(`http://127.0.0.1:8000/police/${id}/`,{
      method: 'GET',
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  updatePoliceAnswer(id:any,reply:any){
    let data={
      reply,
      
    }
    return fetch(`http://127.0.0.1:8000/police/${id}/`, {
    method: 'PUT',
    body:JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
  })
  }
}
