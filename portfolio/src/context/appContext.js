import React, { createContext, useEffect, useReducer, useCallback } from 'react';
import axios from 'axios';
import appReducer from './reducers';
import { GET_PROJECTS, GET_PROJECT_DETAILS, GET_MY_DETAILS, OPEN_MODAL, CLOSE_MODAL, GET_SOCIAL_LINKES, SEND_CONTACT_SUCCESS } from './actions';

const initialState = {
  projects: [],
  projectDetails: {},
  myDetails: {},
  modalOpen: false,
  modalImage: "",
  instagram: '',
  facebook: '',
  linkedIn: '',
  modalImages: [],
  sending: false,
  error: null,
  message: null,
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // axios
  const authFetch = axios.create({
    baseURL: '/api',
  });

  // memoized functions
  const getProjects = useCallback(async () => {
    try {
      const response = await authFetch.get('/getMyProjects');
      dispatch({
        type: GET_PROJECTS,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  }, [authFetch]);

  const getProjectDetails = useCallback(async (projectId) => {
    try {
      const response = await authFetch.get(`/getMyProject/${projectId}`);
      dispatch({
        type: GET_PROJECT_DETAILS,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  }, [authFetch]);

  const getMyDetails = useCallback(async () => {
    try {
      const response = await authFetch.get(`/getMyDetails`);
      dispatch({
        type: GET_MY_DETAILS,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  }, [authFetch]);

  const sendContactForm = useCallback(async (formData) => {
    try {
      const response = await authFetch.post('/contact', formData);
      dispatch({
        type: SEND_CONTACT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      throw error.response.data;
    }
  }, [authFetch]);

  const getSocialLinks = useCallback(async () => {
    try {
      const response = await authFetch.get(`/socialLinks`);
      dispatch({
        type: GET_SOCIAL_LINKES,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  }, [authFetch]);

  const openModal = useCallback((imageUrl) => {
    dispatch({ type: OPEN_MODAL, payload: imageUrl });
  }, []);

  const openModalImages = useCallback((modalImages) => {
    dispatch({ type: OPEN_MODAL, payload: modalImages });
  }, []);

  const closeModal = useCallback(() => {
    dispatch({ type: CLOSE_MODAL });
  }, []);

  const value = {
    projects: state.projects,
    projectDetails: state.projectDetails,
    myDetails:state.myDetails,
    modalImage:state.modalImage,
    modalOpen:state.modalOpen,
    facebook:state.facebook,
    instagram:state.instagram,
    linkedIn:state.linkedIn,
    modalImages:state.modalImages,
    message:state.message,
    getProjects,
    getProjectDetails,
    getMyDetails,
    sendContactForm,
    getSocialLinks,
    openModal,
    closeModal,
    openModalImages
  };

  useEffect(() => {
    getProjects();
    getMyDetails();
    getSocialLinks();
  }, [getProjects, getMyDetails, getSocialLinks])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
