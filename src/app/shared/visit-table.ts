export class VisitTable {
  visit_id: number = 0;
  cust_name: string = '';
  contact_person: string = '';
  contact_no: number;
  interest_product: string = '';
  visit_subject: string = '';
  description: string = '';
  visit_datetime: Date = new Date();
  is_disabled: false;
  is_deleted: false;
  emp_id: 0;
}
