/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
import { jsPDF } from 'jspdf';
import currencyService from '@/services/currencyService';
import { ROBOTO_BASE64 } from '@/constants/fontBase64';

const pdfBillCreationService = {
  showPdf(bill) {
    const doc = new jsPDF();
    doc.addFileToVFS('Potta-One-Regular.ttf', ROBOTO_BASE64);
    doc.addFont('Potta-One-Regular.ttf', 'PottaOne', 'normal');
    doc.setFont('PottaOne', 'normal');
    const docWidth = doc.internal.pageSize.getWidth();

    this.createBillLayout(doc, docWidth);
    this.addCompanyInformations(doc, docWidth, bill);
    this.addBillInformations(doc, docWidth, bill);
    this.addCostumerInformations(doc, bill);
    this.addPaymentCondition(doc, docWidth, bill);
    this.addArticles(doc, docWidth, bill);

    window.open(doc.output('bloburl'), '_blank', ['frame=true', 'resizable=true']);
  },
  createBillLayout(doc, width) {
    doc.setDrawColor(255, 0, 0);
    doc.setLineWidth(1.5);
    doc.line(10, 10, width - 10, 10);
    doc.line(10, 50, width - 10, 50);

    doc.setFontSize(35);
    doc.setTextColor('Black');
    doc.text('Rechnung', width - 71, 22);

    doc.setFontSize(7);
    doc.setTextColor('Gray');
    doc.text('Absender', 10, 15);
    doc.text('Nr.', width - 70, 30);
    doc.text('Datum', width - 70, 40);
    doc.text('Empfänger', 10, 55);
    doc.text('Ihre Bestellung / Unsere Lieferung vom', width - 70, 55);
    doc.text('Zahlungsbedingung', width - 70, 65);
    doc.setDrawColor('Gray');
    doc.setLineWidth(0.3);
    doc.rect(width - 70, 73, 2, 2);
    doc.text('Steuer-Nr.', width - 66, 75);
    doc.rect(width - 50, 73, 2, 2);
    doc.text('Ust-IdNr.', width - 46, 75);

    doc.setDrawColor('Black');
    doc.setLineWidth(0.1);
    doc.line(10, 62, 120, 62);
    doc.line(10, 72, 120, 72);
    doc.line(10, 82, 120, 82);

    doc.line(width - 70, 62, width - 10, 62);
    doc.line(width - 70, 72, width - 10, 72);
    doc.line(width - 70, 82, width - 10, 82);

    this.createProductTable(doc, width);

    doc.line(width - 10, 259, 10, 259);
    doc.line(width - 10, 269, 10, 269);
    doc.line(width - 10, 279, 10, 279);

    doc.setFontSize(7);
    doc.text('Bank', 10, 252);
    doc.text('BIC', 10, 262);
    doc.text('IBAN', 10, 272);
    doc.setFontSize(6);
    doc.text('Die gelieferte Ware bleibt bis zur vollständigen Bezahlung Eigentum des Lieferanten.', 10, 285);
  },
  createProductTable(doc, width) {
    const numberOfRowLines = 23;

    for (let index = 0; index < numberOfRowLines; index++) {
      const y = 95 + index * 7;
      doc.line(width - 10, y, 10, y);
    }

    doc.line(40, 95, 40, 242);
    doc.line(width - 70, 95, width - 70, 249);
    doc.line(width - 40, 95, width - 40, 242);
    doc.line(width - 10, 95, width - 10, 249);

    doc.setFontSize(7);
    doc.text('Ohne Steuerausweißs gemäß Kleinunternehmer-Regelung § 19 UstG.', 10, 246.5);
    doc.setFontSize(9);
    doc.text('Rechnungsbetrag (gesamt)', 100, 246.5);
  },
  addCompanyInformations(doc, docWidth, bill) {
    if (!Object.values(bill.companyInformations).includes(null)) {
      doc.setTextColor('Black');
      doc.setFontSize(23);
      doc.text(bill.companyInformations.companyname, docWidth / 3, 20, null, null, 'center');
      doc.setFontSize(10);
      doc.text(bill.companyInformations.companyTitle, docWidth / 3, 25, null, null, 'center');
      doc.text(bill.companyInformations.ceo, docWidth / 3, 29, null, null, 'center');
      doc.text(`${bill.companyInformations.street} ${bill.companyInformations.houseNumber}`, docWidth / 3, 33, null, null, 'center');
      doc.text(`${bill.companyInformations.postcode} ${bill.companyInformations.location}`, docWidth / 3, 37, null, null, 'center');
      doc.text(bill.companyInformations.phone, docWidth / 3, 41, null, null, 'center');
      doc.text(`${'Ust-IdNr.:'} ${bill.companyInformations.taxId}`, docWidth / 3, 45, null, null, 'center');

      doc.setFontSize(12);
      doc.text(bill.companyInformations.bank, 20, 257);
      doc.text(bill.companyInformations.bic, 20, 267);
      doc.text(bill.companyInformations.iban, 20, 277);
    }
  },
  addBillInformations(doc, docWidth, bill) {
    if (bill.billNumber !== null && bill.date !== null) {
      doc.text(bill.billNumber, docWidth - 50, 30);
      doc.text(bill.date, docWidth - 50, 40);
    }
  },
  addCostumerInformations(doc, bill) {
    if (!Object.values(bill.costumer).includes(null)) {
      doc.text(bill.costumer.name, 20, 60);
      doc.text(`${bill.costumer.street} ${bill.costumer.houseNumber}`, 20, 70);
      doc.text(`${bill.costumer.postcode} ${bill.costumer.location}`, 20, 80);
    }
  },
  addPaymentCondition(doc, docWidth, bill) {
    if (bill.paymentConditions !== null) {
      doc.text(bill.paymentConditions, docWidth - 65, 70);
    }
  },
  addArticles(doc, docWidth, bill) {
    for (let index = 0; index < bill.articles.length; index++) {
      const article = bill.articles[index];
      if (!Object.values(article).includes(null)) {
        const y = 100 + index * 7;
        doc.setFontSize(11);
        doc.text(`${article.quantity}${'x'}`, 22, y);
        doc.text(article.name, 42, y);
        doc.text(`${currencyService.formatPrice(article.pricePerPiece.toString())} ${'€'}`, docWidth - 68, y);
        doc.text(`${currencyService.formatPrice(article.priceForAll.toString())} ${'€'}`, docWidth - 38, y);
      }
    }
    if (bill.overallPrice !== null) {
      doc.text(`${currencyService.formatPrice(bill.overallPrice.toString())} ${'€'}`, docWidth - 50, 247);
    }
  },
};

export default pdfBillCreationService;
