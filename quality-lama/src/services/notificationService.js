import { ElNotification } from 'element-plus';

const notificationService = {
  showSuccessNotification(title) {
    ElNotification.success({
      title,
      position: 'bottom-right',
      showClose: false,
      duration: 1500,
    });
  },
};

export default notificationService;
