describe('Student List Page', () => {
    beforeEach(() => {
      // Visit the page before each test
      cy.visit('/students'); // Assuming '/student-list' is the URL for this component
    });
  
    it('should display student details when student list is not empty', () => {
      // Define student list
      const studentList = [
        { id: 1, name: 'John Doe', gender: 'Male', address: '123 Main St', state: 'TamilNadu' },
        { id: 2, name: 'Jane Smith', gender: 'Female', address: '456 Elm St' }
      ];
  
      // Set up mock data for API call or stub the component to provide data
      cy.intercept('GET', '/api/student-list', { fixture: 'studentList.json' });
  
      // Assuming the component fetches student list from an API endpoint
      cy.fixture('studentList.json').as('studentList');
  
      // Check if student details are displayed correctly
      cy.get('@studentList').then((students) => {
        studentList.forEach((student :any) => {
          cy.contains('name: ' + student.name);
          cy.contains('Id: ' + student.id);
          cy.contains('Gender: ' + student.gender);
          cy.contains('Address: ' + student.address);
        });
      });
    });
  
    it('should display "No Record" message when student list is empty', () => {
      // Set student list to empty
      cy.intercept('GET', '/api/student-list', []);
  
      // Verify if "No Record" message is displayed
      cy.contains('No Record').should('be.visible');
    });
  
    it('should navigate to student details page when a student is clicked', () => {
      // Define a student object
      const student = { id: 1, name: 'John Doe', gender: 'Male', address: '123 Main St' };
  
      // Set up mock data for API call or stub the component to provide data
      cy.intercept('GET', '/api/student-list', { fixture: 'studentList.json' });
  
      // Click on the student link
      cy.contains('div', 'name: ' + student.name).click();
  
      // Verify if navigation occurs to the correct URL
      cy.url().should('include', '/student/' + student.id);
    });
  });