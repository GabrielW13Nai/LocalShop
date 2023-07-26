class AuthenticationService
  SECRET_KEY_BASE = Rails.application.secrets.secret_key_base

  def self.encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY_BASE)
  end

  def self.decode(token)
    decoded = JWT.decode(token, SECRET_KEY_BASE)[0]
    HashWithIndifferentAccess.new(decoded)
  rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
    nil
  end

end