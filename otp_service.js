// =============================================
// خدمة محاكاة إرسال OTP عبر WhatsApp
// (للاختبار فقط - في التطبيق الحقيقي استخدم Twilio أو خدمة مماثلة)
// =============================================

class OTPService {
    constructor() {
        this.otpLogs = [];
    }
    
    // محاكاة إرسال OTP
    async sendOTP(phoneNumber, otpCode) {
        console.log(`📱 [محاكاة] إرسال OTP إلى ${phoneNumber}: ${otpCode}`);
        
        // تسجيل عملية الإرسال
        const logEntry = {
            phone: phoneNumber,
            otp: otpCode,
            timestamp: new Date().toISOString(),
            status: 'sent'
        };
        
        this.otpLogs.push(logEntry);
        
        // محاكاة التأخير في الإرسال
        await this.delay(1000);
        
        // في التطبيق الحقيقي، استبدل هذا بطلب API إلى خدمة الرسائل
        // مثل: await this.sendViaTwilio(phoneNumber, otpCode);
        
        return {
            success: true,
            message: `تم إرسال رمز التحقق إلى ${phoneNumber}`,
            otp: otpCode // في التطبيق الحقيقي لا ترجع الـ OTP لأسباب أمنية
        };
    }
    
    // توليد OTP عشوائي
    generateOTP(length = 6) {
        const digits = '0123456789';
        let otp = '';
        
        for (let i = 0; i < length; i++) {
            otp += digits[Math.floor(Math.random() * 10)];
        }
        
        return otp;
    }
    
    // التحقق من OTP
    verifyOTP(enteredOTP, expectedOTP) {
        const isValid = enteredOTP === expectedOTP;
        
        console.log(`🔍 [محاكاة] التحقق من OTP: ${enteredOTP} === ${expectedOTP} = ${isValid}`);
        
        return {
            valid: isValid,
            message: isValid ? 'الرمز صحيح' : 'الرمز غير صحيح',
            timestamp: new Date().toISOString()
        };
    }
    
    // تأخير لمحاكاة الاتصال بالخادم
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    // الحصول على سجل عمليات OTP
    getLogs() {
        return this.otpLogs;
    }
    
    // محاكاة خدمة إرسال حقيقية (مثل Twilio)
    async sendViaTwilio(phoneNumber, otpCode) {
        // هذا مثال لكيفية استخدام Twilio في التطبيق الحقيقي
        /*
        const accountSid = 'TWILIO_ACCOUNT_SID';
        const authToken = 'TWILIO_AUTH_TOKEN';
        const client = require('twilio')(accountSid, authToken);
        
        try {
            const message = await client.messages.create({
                body: `رمز التحقق: ${otpCode}`,
                from: 'whatsapp:+14155238886', // رقم Twilio للواتساب
                to: `whatsapp:+${phoneNumber}`
            });
            
            console.log('تم إرسال OTP عبر Twilio:', message.sid);
            return { success: true, messageId: message.sid };
        } catch (error) {
            console.error('خطأ في إرسال OTP:', error);
            return { success: false, error: error.message };
        }
        */
        
        // للاختبار، نعيد محاكاة نجاح الإرسال
        return { success: true, messageId: 'simulated_' + Date.now() };
    }
}

// إنشاء نسخة عامة من الخدمة
const otpService = new OTPService();